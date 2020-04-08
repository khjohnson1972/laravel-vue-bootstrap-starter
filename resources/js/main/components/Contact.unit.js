// resources/js/main/components/Contact.vue
import Contact from './Contact.vue'
import axios from 'axios'

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
      ...createComponentMocks()
    })
  })

  // destroy the wrapper after each test
  afterEach(() => {
    wrapper.destroy()
  })

  test('exports a valid component', () => {
    expect(Contact).toBeAComponent()
  })

  test('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('clearForm() reset data', () => {
    wrapper.setData({
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
      expect(wrapper.html()).toContain('field is required')
    })
    expect(wrapper.vm.submitStatus).toBe('ERROR')
    expect(wrapper.vm.attemptSubmit).toBe(true)
  })

  test('the output after successful sumbit', async () => {
    axios.post.mockResolvedValue(Promise.resolve({ data: 'some data' }))
    wrapper.setData({
      formData
    })

    const form = wrapper.find('form')

    form.trigger('submit.prevent')

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.submitStatus).toBe('PENDING')
      expect(wrapper.vm.attemptSubmit).toBe(true)
      expect(axios.post).toBeCalledWith('/api/contacts', formData)
    })
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
