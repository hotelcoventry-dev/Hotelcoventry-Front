interface Iuser {
    id: number;
    EmployeeNumber: number;
    username: string;
    isReceptionist: boolean;
    isManager: boolean;
}

interface Login {
    EmployeeNumber: number;
    password: string;
}