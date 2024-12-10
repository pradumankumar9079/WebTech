#include <bits/stdc++.h>
using namespace std;
struct Node
{
    int val;
    Node *next;
};
class stack
{
    Node *head;
    int size;

    void push(int g)
    {
        Node *temp = new Node();
        temp->val = g;
        temp->next = head;
        head = temp;
    }
    void pop()
    {
        Node *temp = head;
    }

    int size()
    {
    }

    bool isEmpty()
    {
    }
};

int main()
{
}