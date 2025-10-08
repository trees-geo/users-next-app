type Roles = "MANAGER" | "LEAD" | "DEVELOPER" | "TESTER"

const getRole = (type: string ): Roles => {
    if(type === 'manager') {
        return "MANAGER"
    }
    return "DEVELOPER"
}


getRole("")