#include <iostream>
using namespace std;

int sumOfEachDigit(int num)
{
    int sum = 0;
    while (num > 0)
    {
        int rem = num % 10;
        sum += rem;
        num /= 10;
    }
    return sum;
}

int main()
{
    // cout << "Raja raj\n"
    //      << endl;
    // Unlike java not need to specify d
    // double d = 234.234;
    // cout << sizeof(d) << endl;

    // 0 to 255
    // char c = 'A';
    // cout << (int)c << endl;

    // Swap two number without extra variable
    // int a = 10;
    // int b = 20;

    // cout << a << " " << b << endl;
    // a = a + b; // 30
    // b = a - b; // 20
    // a = a - b; // 10
    // cout << a << " " << b << endl;

    // typecasting in cpp same as java
    // double d = 42.5;
    // int i = (int)d;    // Explicit narrowing
    // cout << i << endl; // Output: 42

    // even odd
    // int num;
    // cout << "Enter the number: " << endl;
    // cin >> num;
    // if (num % 2 == 0)
    // {
    //     cout << "Even" << endl;
    // }
    // else
    // {
    //     cout << "odd" << endl;
    // }

    //  Check Vowel or Consonent
    // char c = '1';
    // if (c == 'a' || c == 'i' || c == 'i' || c == 'O' || c == 'u')
    // {
    //     cout << "is vowel" << endl;
    // }
    // else if (!(c >= 'a' && c <= 'z'))
    // {
    //     cout << "Enter Valid Char" << endl;
    // }
    // else
    // {
    //     cout << "is Consonent" << endl;
    // }

    // 0 1 1 2 3 5 8 13 21 34
    //  Fibonacci Series
    // int firstNum = 0;
    // int secondNum = 1;
    // int next;
    // for (int i = 3; i <= 10; i++)
    // {

    //     next = firstNum + secondNum;
    //     if (i == 10)
    //     {
    //         cout << next << endl;
    //     }
    //     firstNum = secondNum;
    //     secondNum = next;
    // }

    // Find Sum Of Each Digit in A Number
    int num = 34543;
    int res = sumOfEachDigit(num);
    cout << res << endl;
}
