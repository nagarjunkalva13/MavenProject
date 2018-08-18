package POMM.MavenProject;


import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

//import cucumber.api.PendingException;
import cucumber.api.java.en.Given;		
import cucumber.api.java.en.Then;		
import cucumber.api.java.en.When;

public class StepDefination {

WebDriver driver;
		
				

  
@Given("^Enter url$")
public void enter_url() throws Throwable {
    driver=new FirefoxDriver();
		//driver.navigate().to("gmail.com");
		driver.navigate().to("http://localhost/orangehrm/orangehrm-2.6/login.php");
//		driver.findElement(By.cssSelector("body")).sendKeys(Keys.CONTROL+"t");
		//driver.navigate().to("http://localhost/orangehrm/orangehrm-2.6/login.php");

   // throw new PendingException();
}


@When("^user enters username and Password$")
public void user_enters_username_and_Password() throws Throwable {
   driver.findElement(By.name("txtUserName")).sendKeys("admin");
        driver.findElement(By.name("txtPassword")).sendKeys("admin");

    //throw new PendingException();
}

@Then("^success message is displayed$")
public void success_message_is_displayed() throws Throwable {
    driver.findElement(By.name("Submit")).sendKeys(Keys.ENTER);
System.out.println("Login successfully");
   // throw new PendingException();
}
@When("^close the browser$")
public void close_the_browser() throws Throwable {
	//driver.findElement(By.name("Submit")).sendKeys(Keys.ENTER);
   driver.close();
   System.out.println("browser closed");
	// Write code here that turns the phrase above into concrete actions
   // throw new PendingException();
}
}

