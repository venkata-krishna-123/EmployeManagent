package com.project.www.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.www.model.Employee;
import com.project.www.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController 
{
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployees()
	{
		return employeeService.getAllEmployees();
	}
	
	@PostMapping("/employee")
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeService.createEmployee(employee);
	}
	
	@GetMapping("/employee/{id}")
	public Employee getEmployeeById(@PathVariable Long id)
	{
		return employeeService.getEmployeeById(id);
	}
	
	@PutMapping("/employee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employee)
	{
		return employeeService.updateEmployee(id,employee);
	}
	
	@DeleteMapping("/employee/{id}")
	public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable long id)
	{
		return employeeService.deleteEmployee(id);
	}
	
	

}
