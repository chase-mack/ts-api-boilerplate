// unused in sample. use when implementing services
// or use when performing business logic in controller
// this interface must match Schema
export interface ITestModel {
    name: string,
    phone: string,
    is_true: boolean
}

// it may also be worth placing Schema directly underneath the interface in one file