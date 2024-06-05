# include <bits/stdc++.h>
using namespace std;
int main()
{
    int test;
    cin>>test;
    for(int i = 0; i<test; i++)
    {

        string arr[8];
        for (int j = 0; j<8; j++)
        {
            cin>>arr[j];
        }
        int row =0, column = 0;
        for (int j = 0; j<8; j++)
        {
            int count_row = 0;
            int count_col = 0;
            for(int k = 0; k<8; k++)
            {
                if(arr[j][k]=='R')
                {
                    count_row+=1;
                }
                if(arr[k][j]=='B')
                {
                    count_col+=1;
                }
            }
            if(count_row==8)
            {
                row = j;
            }
            if(count_col==8)
            {
                column = j;
            }

            
        }
        if(row>column){
            cout<<"R"<<'\n';
        }
        else{
            cout<<"B"<<'\n';
        }
        


    }
}