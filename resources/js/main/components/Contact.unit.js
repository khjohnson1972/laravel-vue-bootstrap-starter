// resources/js/main/components/Contact.vue
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Contact from './Contact.vue'

describe('Contact.vue Component', () => {
    const localVue = createLocalVue()

    let wrapper

    // creates a new wrapper after each test
    beforeEach(() => {
        wrapper = shallowMount(Contact, {
            localVue,
            mocks: {},
            stubs: {},
            methods: {}
        })
    })

    // destroy the wrapper after each test
    afterEach(() => {
        wrapper.destroy()
    })

    test('Should mount without crashing', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Test calculateHomeHydration()', () => {
        wrapper.setData({
            home_adults: 2,
            home_teenagers: 2,
            home_kids: 2
        })
        // run the calculation
        wrapper.vm.calculateHomeHydration()

        expect(wrapper.vm.total_day_gallons).toEqual(0.9333333333333332)
        expect(wrapper.vm.total_month_gallons).toEqual(wrapper.vm.total_day_gallons * 30)
        expect(Number.isInteger(wrapper.vm.total_bottles)).toBe(true)
    })

    test('Test calculateBusinessHydration()', () => {
        wrapper.setData({
            business_days: 5,
            business_employees: 5
        })
        // run the calculation
        wrapper.vm.calculateBusinessHydration()

        expect(wrapper.vm.total_month_gallons).toEqual(16.666666666666668)
        expect(Number.isInteger(wrapper.vm.total_bottles)).toBe(true)
    })

    test('Test selectDays()', () => {
        // run the selectDays
        wrapper.vm.selectDays(2)

        expect(wrapper.vm.business_days).toEqual(2)
    })

    test('Test selectType()', () => {
        // run the selectType
        wrapper.vm.selectType('home')

        expect(wrapper.vm.type).toBe('home')
    })

    test('Test calculate()', () => {
        const mockMethods = {
            calculateHomeHydration: jest.fn(),
            calculateBusinessHydration: jest.fn()
        }
        const wrapper = shallowMount(Contact, {
            localVue,
            mocks: {},
            stubs: {},
            methods: mockMethods
        })

        // run the calculate
        wrapper.vm.calculate()
        expect(wrapper.vm.calculated).toBe(true)
        expect(mockMethods.calculateBusinessHydration).toHaveBeenCalled()

        wrapper.setData({
            calculated: false,
            type: 'home'
        })
        wrapper.vm.calculate()
        expect(wrapper.vm.calculated).toBe(true)
        expect(mockMethods.calculateHomeHydration).toHaveBeenCalled()
    })

    test('the output after home click contains the adult, teen and child inputs', async () => {
        const button = wrapper.find('#home-button')
        button.trigger('click')
        await wrapper.vm.$nextTick()
        expect(wrapper.html()).toContain('<input name="home_adults" type="number"')
        expect(wrapper.html()).toContain('<input name="home_teenagers" type="number"')
        expect(wrapper.html()).toContain('<input name="home_kids" type="number" id="home_kids"')
    })

    test('the output after business click contains the number of employees and days open button', async () => {
        const button = wrapper.find('#business-button')
        button.trigger('click')
        await wrapper.vm.$nextTick().then(() => {
            expect(wrapper.html()).toContain('<input name="business_employees" type="number"')
            expect(wrapper.html()).toContain('<button type="button"')
        })
    })

    test('Test display()', async () => {
        // home tests
        wrapper.setData({
            type: 'home',
            home_adults: 1,
            home_kids: 1,
            home_teenagers: 1
        })
        wrapper.vm.calculate()

        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toContain('3 five gallon bottles')
        expect(wrapper.html()).toContain('For home use')

        // business tests
        wrapper.setData({
            type: 'business',
            business_days: 1,
            business_employees: 1
        })
        wrapper.vm.calculate()

        await wrapper.vm.$nextTick()

        expect(wrapper.html()).toContain('1 five gallon bottle')
        expect(wrapper.html()).toContain('1 employee')
        expect(wrapper.html()).toContain('1 day')
        expect(wrapper.html()).toContain('For business use')

        wrapper.setData({
            type: 'business',
            business_days: 5,
            business_employees: 300
        })
        wrapper.vm.calculate()

        await wrapper.vm.$nextTick()
        expect(wrapper.html()).toContain('5 days')
        expect(wrapper.html()).toContain('300 employees')
        expect(wrapper.html()).toContain('recommend a bottle-free cooler')
    })

    test('Test resetForm()', () => {
        // run the reset
        wrapper.vm.resetForm()

        expect(wrapper.vm.calculated).toBe(false)
        expect(wrapper.vm.type).toBe(null)
        expect(wrapper.vm.home_adults).toBe(0)
        expect(wrapper.vm.home_kids).toBe(0)
        expect(wrapper.vm.home_teenagers).toBe(0)
        expect(wrapper.vm.business_employees).toBe(0)
        expect(wrapper.vm.business_days).toBe(0)
    })
})
