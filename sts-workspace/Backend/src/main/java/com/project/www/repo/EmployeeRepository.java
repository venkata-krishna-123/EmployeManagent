package com.project.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.www.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>
{
	
}
