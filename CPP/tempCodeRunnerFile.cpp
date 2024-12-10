int sumOfEachDigit(int num)
{
    int sum;
    while (num > 0)
    {
        int rem = num % 10;
        sum += rem;
        num /= 10;
    }
    return sum;
}