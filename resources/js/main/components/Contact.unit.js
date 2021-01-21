// resources/js/main/components/Contact.vue
import Contact from './Contact.vue'
import axios from 'axios'
import { VuelidatePlugin } from '@vuelidate/core'

jest.mock('axios') // axios here is the mock from above!

describe('Contact.vue Component', () => {
  let wrapper = null

  const formData = {
    name: 'John Doe',
    email: 'test@test.com',
    phone: '555-555-5555',
    company: 'test',
    message: 'message message'
  }

  // creates a new wrapper after each test
  beforeEach(() => {
    wrapper = mount(Contact, {
      global: {
        plugins: [VuelidatePlugin]
      },
      ...createComponentMocks()
    })
  })

  // unmount is now Vue3 -  the wrapper after each test
  afterEach(() => {
    wrapper.unmount()
  })

  test('matches snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('exports a valid component', () => {
    expect(Contact).toBeAComponent()
  })

  test('clearForm() reset data', async () => {
    await wrapper.setData({
      formData
    })
    wrapper.vm.clearForm()
    expect(wrapper.vm.formData.email).toBe('')
  })

  test('the output after click contains the errors', () => {
    const form = wrapper.find('form')

    form.trigger('submit.prevent')

    wrapper.vm.$forceUpdate()

    wrapper.vm.$nextTick().then(() => {
      expect(wrapper.html()).toContain('Value is required')
    })
    expect(wrapper.vm.submitStatus).toBe('ERROR')
    expect(wrapper.vm.attemptSubmit).toBe(true)
  })

  test('a successful request in makeRequest()', async () => {
    axios.post.mockResolvedValue(Promise.resolve({ data: 'some data' }))

    // return a promise because of the async call
    return wrapper.vm.makeRequest().then(() => {
      expect(wrapper.vm.submitStatus).toBe('OK')
      expect(wrapper.vm.formData.name).toBe('')
      expect(wrapper.vm.formData.email).toBe('')
      expect(wrapper.vm.formData.phone).toBe('')
      expect(wrapper.vm.formData.company).toBe('')
      expect(wrapper.vm.formData.message).toBe('')
      expect(wrapper.html()).toContain('Thanks for your submission!')
    })
  })

  test('an unsuccessful request in makeRequest()', async () => {
    axios.post.mockReturnValue(Promise.reject(new Error('This is an error in the request')))

    wrapper.setData({
      formData
    })
    // return a promise because of the async call
    return wrapper.vm.makeRequest().then(() => {
      expect(wrapper.vm.submitStatus).toBe('FAILED')
      expect(axios.post).toBeCalledWith('/api/contacts', formData)
      expect(wrapper.vm.formData.name).toBe(formData.name)
      expect(wrapper.vm.formData.email).toBe(formData.email)
    })
  })
})
