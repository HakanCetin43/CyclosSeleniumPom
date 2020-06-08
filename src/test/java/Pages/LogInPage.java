package Pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class LogInPage {

    static WebElement element = null;

    public static void navigate(WebDriver driver, String url) {
        driver.navigate().to(url);


    }

    public static void enterUsername(WebDriverWait wait, String username) {
        element = wait.until(ExpectedConditions
                .visibilityOfElementLocated(By.name("principal")));
        element.sendKeys(username);
    }

    public static void enterPassword(WebDriverWait wait, String password) {
        element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("password")));
        element.sendKeys(password);

    }

    public static void clickSignIn(WebDriver driver) {
        element = driver.findElement(By.xpath("//*[@class='actionButton']"));
        element.click();

    }

    public static void viewsErrorMessage(WebDriverWait wait, String expectedErrorMessage) {

        element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.
                xpath("//*[contains(@class, 'notificationText notificationText')]")));
        String actualMessage = element.getText();

        Assert.assertTrue(actualMessage.contains(expectedErrorMessage));


    }


}
