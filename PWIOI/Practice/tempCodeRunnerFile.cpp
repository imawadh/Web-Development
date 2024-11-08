#include <bits/stdc++.h>
using namespace std;

int main() {
	int test;
	cin>>test;
	while(test--)
	{
	    int a,b;
	    cin>>a>>b;
	    cout<<2<<" ";
	    for(int i =0; i<b-1; i++)
	    {
	        cout<<3<<' ';
	    }
	    cout<<'\n'<<3<<' ';
	    for(int i =0;i<b-1; i++ )
	    {
	        cout<<2<<' ';
	    }
	    cout<<'\n';
	    for(int i = 2; i<a; i++)
	    {
	        for(int j =0; j<b; j++)
	        {
	            cout<<2<<' ';
	        }
	        cout<<endl;
	    }
	}

}
