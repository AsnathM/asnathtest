package com.login.loginrole;

import com.login.loginrole.model.User;
import com.login.loginrole.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Locale;
import java.util.stream.Stream;

@SpringBootApplication
public class LoginRoleApplication {

    public static void main(String[] args) {
        SpringApplication.run(LoginRoleApplication.class, args);
    }
@Bean
    CommandLineRunner init(UserRepository userRepository){
        return args -> {
            Stream.of("anna", "julie", "mecy", "janeth").forEach(name ->{
                User user = new User(name, name.toLowerCase() + "@domain.com");
                userRepository.save(user);
            });
            userRepository.findAll().forEach(System.out::println);
        };
}














}



