package <%= properties.packageName %>.controller;

import static com.jayway.restassured.RestAssured.*;
import <%= properties.packageName %>.ResourceServer;
import org.apache.http.HttpStatus;
import org.hamcrest.Matchers;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ResourceServer.class)
@WebAppConfiguration
@IntegrationTest("server.port=0")
public class ToDoControllerTestIT {
    
    @Value("${local.server.port}")
    private Integer serverPort;
    
    @Before
    public void setPort(){
        port = serverPort;
    }
    
    @Test
    public void testHalo(){
        when()
                .get("/api/halo?name=admin")
            .then()
                .statusCode(HttpStatus.SC_OK)
                .body("salam", Matchers.containsString("Halo admin"));
    }
}
