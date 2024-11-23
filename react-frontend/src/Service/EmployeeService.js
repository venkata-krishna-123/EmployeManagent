import axios from 'axios';

const Employee_Base_Api_url="http://localhost:9090/api/v1/employee";

class EmployeeService
{
    getEmployee()
    {
        return axios.get(Employee_Base_Api_url);
    }

    createEmployee(employee)
    {
         return axios.post(Employee_Base_Api_url,employee);   
    }

    getEmployeeById(employeeId)
    {
        return axios.get(Employee_Base_Api_url+'/'+employeeId);
    }

    updateEmployee(employeeId,employee)
    {
        return axios.put(Employee_Base_Api_url+'/'+employeeId,employee);
    }

    deleteEmployee(employeeId)
    {
          return axios.delete(Employee_Base_Api_url+'/'+employeeId);  
    }
}


export default new EmployeeService();