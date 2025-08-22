export interface Iuser {
    id: number;
    EmployeeNumber: number;
    username: string;
    isReceptionist: boolean;
    isManager: boolean;
}

export interface Login {
    EmployeeNumber: number;
    password: string;
}