
   
       
        describe ("test login page for input field",function()
        { 
        //element method is used to locate an element
       
            //  browser.get("http://localhost:8080/#/login")
            beforeEach(function() {
                browser.get('http://localhost:8080/#/login');
              });

        it('Right Username and wrong pwd',function()
        {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!")
                // browser.get("http://localhost:8080/#/login")
                
                element(by.model("username")).sendKeys("admin");
                browser.sleep(500);
                element(by.model("password")).sendKeys("pass");
                browser.sleep(500);
                element(by.buttonText("Login")).click();
                expect(element(by.tagName('a')).getText()).toBe('Back');
                
                element(by.xpath('//body/div/div/div[2]/div/a')).click();
                // expect(element(by.xpath('//body/div/div/div[2]/div[1]/h3')).getText().toEqual('Login Page'));

                // expect(element(by.xpath('//form/div/div[3]/span')).getText()).toEqual('Incorrect username/password !');
        });
        
        
        // it ("to test input and check output",function()
        // {
           
        //     // expect(browser.getTitle()).toEqual('AngularJS Simple Login Page');

        //     console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
        //     element(by.model("username")).sendKeys("");
        //     browser.sleep(500);
        //     element(by.model("password")).sendKeys("pass");
        //     browser.sleep(500);
        //     element(by.buttonText("Login")).click();
        //     expect(element(by.xpath("//form/div/div[3]/span")).getText().toEqual('{{ error }}'))
            
        //     // expect(element(by.linkText('http://localhost:8080/#/login')).getTagName()).toBe('http://localhost:8080/#/home');
        //     // expect(element(by.xpath('//body/div/div/div[2]/h3')).getTagName()).toEqual('Home Page');

        //     browser.sleep(500);
        // });
        
        it('Right Username and wrong pwd',function()
        {
                console.log("#####################################")
                element(by.model("username")).sendKeys("shruti");
                browser.sleep(500);
                element(by.model("password")).sendKeys("shruti");
                browser.sleep(500);
                element(by.buttonText("Login")).click();
                expect(element(by.xpath('//form/div/div[3]/span')).getText()).toEqual('Incorrect username/password !');
                browser.sleep(500);
        });
        
        // it('Blank Username and pwd',function()
        // {

        //         element(by.model("username")).sendKeys("");
        //         element(by.model("password")).sendKeys("");
        //         browser.sleep(500);
        //         element(by.buttonText("Login")).click();
        //         browser.sleep(500);
    

        //         expect(element(by.xpath('//form/div/div[3]/span')).getText()).toEqual('Incorrect username/password !')
        // });
   
    });

