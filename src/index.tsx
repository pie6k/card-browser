import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './global-style'

import { BasicFilterView, UserFilterView, UserFilterGroupsView } from './views'
import { Spacing } from './lib/layout'
import { ShowcasePage } from './lib/presentation'

console.info(`⚛️ ${React.version}`)

const App = () => (
  <>
    <GlobalStyle />
    <ShowcasePage>
      <BasicFilterView />
      <Spacing size="Large" />
      <UserFilterView />
      <Spacing size="Large" />
      <UserFilterGroupsView />
    </ShowcasePage>
  </>
)

ReactDOM.render(<App />, document.getElementById('root'))

module.hot && module.hot.accept()
