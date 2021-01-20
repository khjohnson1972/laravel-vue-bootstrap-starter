import Alert from './Alert.vue'

describe('Alert.vue Component', () => {
  let wrapper = null

  // creates a new wrapper after each test
  beforeEach(() => {
    wrapper = shallowMount(Alert, {
      ...createComponentMocks(),
      props: {
        alert: {
          message: 'test'
        }
      }
    })
  })

  // unmount is now Vue3 -  the wrapper after each test
  afterEach(() => {
    wrapper.unmount()
  })

  test('exports a valid component', () => {
    expect(Alert).toBeAComponent()
  })

  test('test shown() returns message', () => {
    expect(wrapper.vm.shown).toBe('test')
  })

  test('test shown() returns title', async () => {
    await wrapper.setProps({
      alert: {
        title: 'title'
      }
    })
    expect(wrapper.vm.shown).toBe('title')
  })

  test('test status() returns class name', async () => {
    await wrapper.setProps({
      alert: {
        context: 'success'
      }
    })
    expect(wrapper.vm.status).toBe('alert-success')
  })
})
