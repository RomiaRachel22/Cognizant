import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/authenticate").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(httpBasic -> {}) // enable basic auth
            .sessionManagement(sess -> sess.sessionCreationPolicy(STATELESS));

        return http.build();
    }

    // ✅ Add this bean to define "user:pwd"
    @Bean
    public UserDetailsService userDetailsService() {
        var user = User
                .withUsername("user")
                .password("{noop}pwd")  // {noop} means no password encoding
                .roles("USER")
                .build();

        return new InMemoryUserDetailsManager(user);
    }
}
