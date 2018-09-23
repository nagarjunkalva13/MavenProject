package POMM.MavenProject;


import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;

//@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class JunitAnnotationsOrder {

@BeforeClass
public static void beforeClassMethod() {
System.out.println("@before class");
}

@Ignore
public void ignore() {
	System.out.println("@Ignore ");
//System.out.println(“Inside Before Method”);
}


@Test(timeout=500)
//@Test(expected=IllegalArgumentException.class)
//@RunWith(Cucumber.class)
public void runwith() {
	System.out.println("@Timeout 500 ");
//System.out.println(“Inside Before Method”);
}

@Before
public void beforeMethod() {
	System.out.println("@before ");
//System.out.println(“Inside Before Method”);
}

@Test
public void test1() {
	System.out.println("@Test1");
//System.out.println(“Inside Test method”);
}
@Test
public void test2() {
	System.out.println("@Test2");
//System.out.println(“Inside Test method”);
}

@After
public void afterMethod() {
	System.out.println("After");
//System.out.println(“Inside After method”);
}

@AfterClass
public static void afterClassMethod() {
	System.out.println("@After class");
//System.out.println(“Inside After Class method”);
}

}