package com.asyouwish.repository;

import com.asyouwish.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource
@CrossOrigin("*")
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}