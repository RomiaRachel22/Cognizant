package com.cognizant.springlearn.controller;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;

@RestController
public class CountryController {

    @GetMapping("/country")
    public Country getCountryIndia() {
        // Best practice: use try-with-resources to close context
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            return (Country) context.getBean("India");
        }
    }
}
