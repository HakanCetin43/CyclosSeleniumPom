package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PayUserPage {
    static WebElement element = null;

    public static void clickContact(WebDriverWait wait) {
        element = wait.until(ExpectedConditions.
                visibilityOfElementLocated(By.xpath("//span[@class='checkableLabel' and text()='Contact']")));
        element.click();
    }

    public static void selectPayee(WebDriverWait wait, WebDriver driver) throws InterruptedException {
//        driver.findElement(By.xpath("//div[@class='selectionLabel' and text()='Please, select an option']")).click();
//        Thread.sleep(3000);
//        driver.findElement(By.xpath("//a[@class='option' and text()='The Coffee corner']")).click();
//        Thread.sleep(10000);
        wait.until(ExpectedConditions.
                visibilityOfElementLocated(By.xpath("//div[@class='selectionLabel' and text()='Please, select an option']")))
                .click();
        Thread.sleep(1000);
        wait.until(ExpectedConditions.
               visibilityOfElementLocated(By.xpath("//a[@class='option' and text()='The Coffee corner']"))).click();
      //  Thread.sleep(3000);


        //element.click();


    }

    public static void enterAmountToPay(WebDriverWait wait, String amount) {
        element = wait.until(ExpectedConditions
                .visibilityOfElementLocated(By.xpath("//input[@class='inputField large rightAligned']")));
        element.sendKeys(amount);
    }

    public static void typeDescription(WebDriverWait wait, String description) {
        element = wait.until(ExpectedConditions
                .visibilityOfElementLocated(By.name("description")));
        element.sendKeys(description);
    }

    public static void clickSubmit(WebDriverWait wait) {
        element = wait.until(ExpectedConditions
                .visibilityOfElementLocated(By.xpath("//div[@class='actionButtonText' and text()='Submit']")));
        element.click();

    }


}
