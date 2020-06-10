package Runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources",
        glue = "MyStepdefs",
        //tags = {"@Happy"},
        plugin = {"pretty"
//                "html:report/cucumber",
//                "json:report/cucumber.json"
        },
        dryRun = false,
        strict = false

)

//@RunWith(Cucumber.class)
//@CucumberOptions(
//        plugin = {
//                "pretty",
//                "html:target/default-cucumber-reports",
//                "junit:target/cucumber.xml"
//        },
//        features = {"src/test/resources/"},
//        glue = { "steps"},
//        //glue = {"src/test/java/steps"},
//        dryRun = false,
//        tags = {""}
//)
public class RunCucumber {
}
