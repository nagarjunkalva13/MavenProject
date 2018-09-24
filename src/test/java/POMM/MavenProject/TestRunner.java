package POMM.MavenProject;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\SeleniumTrg\\MavenProject\\src\\test\\java\\POMM\\MavenProject\\L3.feature",
		format = {"pretty", "html:target/Destination"}
				//glue= {"StepDefination"},
					//	plugin = { "pretty", "html:target/cucumber-reports" },
						,strict=true,dryRun=false,monochrome = true)
public class TestRunner {
 
}

/*
waits
Screenshot
log
extent reports

diff between css and xpath 
truncate and delete
frame
String reverse
subString
pattern program
6 phases in maven
javaScript Executer
code snippet for database Connectivity

*/

