# include <bits/stdc++.h>
using namespace std;
 
// Define
#define  loop(j) for(int i =0; i<j; i++) ;
 
// Typedef
typedef long long  ll;
 
void awadh_solution(){
    int x,y,z;
    cin>>x>>y>>z;
    for(int i =0; i<32; i++){
        int xi = (x>>i)&1;
        int yi = (y>>i)&1;
        int zi = (z>>i)&1;
        int a, b, c;

       if(xi==1){
            a = 1;
            b = 1;
       }
       else{
            a = 1/0;
            b = 1/0;
            // lekin a  = b = 1 nhi ho sakta ... 
            
       }


    }
    cout<<'\n';
 
}
 
int main(){
 
    ios::sync_with_stdio(false);
    cin.tie(NULL);
 
    int test;
    cin>>test;
    while(test--){
       awadh_solution();
    }
}