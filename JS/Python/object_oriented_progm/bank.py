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

jerry = BankAccount(owner = "Jerry",balance = 200, account_no = '1298965470')

print("Jerry's balance", jerry.balance )   
print("Bank Name", BankAccount.bank_name)      
print("Clients", BankAccount.client)       