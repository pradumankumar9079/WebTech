#include <bits/stdc++.h>
using namespace std;
int main()
{
    // Creation
    stack<int> s;

    s.push(2);
    s.push(3);

    s.pop(); // not returning anything
    cout << s.top() << endl;

    while (s.empty() != true)
    {
        cout << s.top() << endl;
        s.pop();
    }
    cout << s.size();
}