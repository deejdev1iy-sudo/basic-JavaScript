class BankAccount:
    client = 0
    bank_name = 'Post Bank'

    def __init__(self, owner, balance, account_no):
        self.owner = owner
        self._balance = balance
        self.account_no = account_no

    @property
    def balance(self):
        print("Somone's tried to read the balance")
        return self._balance

    @balance.setter
    def balance(self, value):
        if not isinstance(value(int, float)):
            print("Ensure you enter a number for new balance")
            return
        if value < 0:
            print("value must not be less than 0")
            return 
        self._balance = value

    def deposit(self):
        pass

    def withdrawal(self):
        pass

    def show_account_details(self):
        print(f"Owner {self.owner}")
        print(f"Balance {self.balance}")
        print(f"Account no {self.account_no}")

    @staticmethod
    def calculate_interest(amount, year):
        rate = 10
        interest_per_year = amount*(year/100)
        interest_total = interest_per_year * year
        total = amount + interest_total  
        print(f"If you take a loan. of ${amount}, interest rate per year {interest_per_year}")
        print(f"Total interest {interest_total}, total to pay is {total} after {year}")

    @classmethod
    def add_client(cls):
        cls.client = cls.client + 1

jerry = BankAccount(owner = "Jerry",balance = 200, account_no = '1298965470')

print("Jerry's balance", jerry.balance )   
print("Bank Name", BankAccount.bank_name)      
print("Clients", BankAccount.client)       