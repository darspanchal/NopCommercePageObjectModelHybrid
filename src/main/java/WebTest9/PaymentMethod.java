package WebTest9;

import org.openqa.selenium.By;

public class PaymentMethod extends Utils {
    private By _checkbox = By.xpath("//input[@id='paymentmethod_1']");
    private By _continue = By.xpath("//input[@onclick='PaymentMethod.save()']");
    private By _dropdown = By.xpath("//select[@class='dropdownlists']");
    private String card = "MasterCard";
    private By _cardHolderName = By.xpath("//input[@id='CardholderName']");
    private String cardHolderName ="D file ";
    private By _cardNum = By.xpath("//input[@name='CardNumber']");
    private String cardNum = "5555555555554444";
    private By _expireMonth = By.xpath("//select[@name='ExpireMonth']");
    private String expireMonth = "2";
    private By _expireYear = By.xpath("//select[@name='ExpireYear']");
    private String expireyear = "2022";
    private By _cardcode = By.xpath("//input[@name='CardCode']");
    private String cardcode = "123";
    private By _contine1 = By.xpath("//input[@onclick='PaymentInfo.save()']");
    private By _confirm = By.xpath("//input[@onclick='ConfirmOrder.save()']");



    public void userChoosePaymentMethod(){
        try {
            Thread.sleep(2000); // System will go on sleep mode to allow loading the homepage(very Slow)
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        clickOnElement(_checkbox);
        clickOnElement(_continue);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        selectTextFromDropDown(_dropdown,"MasterCard");

        EnterText(_cardHolderName,cardHolderName);
        EnterText(_cardNum,cardNum);
        selectTextFromDropDown(_expireMonth,expireMonth);
        selectTextFromDropDown(_expireYear,expireyear);
        EnterText(_cardcode,cardcode);

        clickOnElement(_contine1);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        clickOnElement(_confirm);
    }
}
