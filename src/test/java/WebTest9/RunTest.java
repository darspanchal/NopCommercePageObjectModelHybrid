package WebTest9;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;


    @RunWith(Cucumber.class)
    @CucumberOptions(features = ".", plugin = {"pretty", "html:target/Destination" })

    public class RunTest {
}


