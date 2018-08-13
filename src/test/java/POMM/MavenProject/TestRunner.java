package POMM.MavenProject;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\SeleniumTrg\\MavenProject\\src\\test\\java\\POMM\\MavenProject\\L.feature",
		format = {"pretty", "html:target/Destination"})
				//glue= {"StepDefination"},
					//	plugin = { "pretty", "html:target/cucumber-reports" },
					//	monochrome = true)
public class TestRunner {
 
}