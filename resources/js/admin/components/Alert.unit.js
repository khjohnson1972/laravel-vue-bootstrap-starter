import Alert from './Alert.vue'

describe('Alert.vue Component', () => {
  let wrapper = null

  // creates a new wrapper after each test
  beforeEach(() => {
    wrapper = shallowMount(Alert, {
      ...createComponentMocks(),
      propsData: {
        alert: {
          message: 'test'
        }
      }
    })
  })

  // destroy the wrapper after each test
  afterEach(() => {
    wrapper.destroy()
  })

  test('exports a valid component', () => {
    expect(Alert).toBeAComponent()
  })

  test('test shown() returns message', () => {
    expect(wrapper.vm.shown).toBe('test')
  })

  test('test shown() returns title', () => {
    wrapper.setProps({
      alert: {
        title: 'title'
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.shown).toBe('title')
    })
  })

  test('test status() returns class name', () => {
    wrapper.setProps({
      alert: {
        context: 'success'
      }
    })
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.status).toBe('alert-success')
    })
  })
})
