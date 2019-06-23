import { storiesOf } from '@storybook/vue'

import Header from '../components/Header'
import Footer from '../components/Footer'

storiesOf('Header', module).add('simple', () => ({
  components: { Header },
  template: `<Header />`
}))

storiesOf('Footer', module).add('simple', () => ({
  components: { Footer },
  template: `<Footer />`
}))
