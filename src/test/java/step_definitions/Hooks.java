package step_definitions;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;

import base.Base;

import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.bonigarcia.wdm.config.Config;
import io.cucumber.java.Scenario;
import utils.ExcelReader;

public class Hooks extends Base{
	
	
	@Before
	public void setup() throws IOException, InvalidFormatException {
		
		config = new Properties();
		fis = new FileInputStream( System.getProperty("user.dir") + "\\src\\test\\resources\\cofig\\config.properties");
		config.load(fis);
	
		//initialize excel file
		excelReader = new ExcelReader();
		testData = excelReader.getData(System.getProperty("user.dir") + "\\src\\test\\resources\\testData\\loginData.xlsx", "loginTestData");

		
		switch (config.getProperty("browser")) {
		case "chrome":
			ChromeOptions chromeOption = new ChromeOptions();
			chromeOption.setHeadless(false);
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver(chromeOption);
			break;
		case "firefox":
			FirefoxOptions firefoxOptions = new FirefoxOptions();
			firefoxOptions.setHeadless(true);
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver(firefoxOptions);
			break;
		case "edge":
			EdgeOptions edgeOptions = new EdgeOptions();
		
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver(edgeOptions);
			break;
		case "ie":
			InternetExplorerOptions internetExplorerOptions = new InternetExplorerOptions();
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver(internetExplorerOptions);
			break;
		default:
			
		}		
		host = config.getProperty("env");
		
		int seconds = Integer.parseInt(config.getProperty("implisitWait"));
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(seconds , TimeUnit.SECONDS);
		System.out.println("before run");
	}
	@After
	public void tearDown(Scenario scenario) {
		try {
			String screenshotName= scenario.getName().replace("", "");
			if(scenario.isFailed()) {
				scenario.log("This is my failure message");
				TakesScreenshot ts = (TakesScreenshot)driver;
				byte[]screenshot = ts.getScreenshotAs(OutputType.BYTES);
				scenario.attach(screenshot, "image/png", screenshotName);
			}
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		
		driver.quit();
	
	}
//	@After
//	public void tearDown() throws IOException {
//		System.out.println("after run");
//		fis.close();
//		driver.quit();
//	}
}
