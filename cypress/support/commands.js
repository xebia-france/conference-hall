import firebase from 'firebase/app'
import 'firebase/auth'

import { Polly } from '@pollyjs/core'
import FetchAdapter from '@pollyjs/adapter-fetch'
import XHRAdapter from '@pollyjs/adapter-xhr'
import LocalStoragePersister from '@pollyjs/persister-local-storage'

Polly.register(FetchAdapter)
Polly.register(XHRAdapter)
Polly.register(LocalStoragePersister)

const apiKey = Cypress.env('APP_API_KEY')
const authDomain = Cypress.env('APP_AUTH_DOMAIN')
const projectId = Cypress.env('APP_PROJECT_ID')
const token = Cypress.env('APP_TOKEN')

firebase.initializeApp({ apiKey, authDomain, projectId })

Cypress.Commands.add('clearFirestore', () => {
  cy.exec(
    `firebase --project ${projectId} --token ${token} firestore:delete --all-collections --yes`,
  )
})

Cypress.Commands.add('login', () => {
  firebase.auth().signInWithEmailAndPassword('cypress@conference-hall.io', 'cypress')
})

Cypress.Commands.add('logout', () => {
  firebase.auth().signOut()
})

Cypress.Commands.add('pollyVisit', (url, { name }, options) => cy.visit(
  url,
  Object.assign({}, options, {
    onBeforeLoad: (win) => {
      const polly = new Polly(name, {
        persister: 'local-storage',
        adapters: ['xhr', 'fetch'],
        adapterOptions: {
          fetch: {
            context: win,
          },
          xhr: {
            context: win,
          },
        },
        persisterOptions: {
          'local-storage': {
            context: win,
          },
        },
      })

      Cypress.config('polly', polly)
    },
  }),
))
