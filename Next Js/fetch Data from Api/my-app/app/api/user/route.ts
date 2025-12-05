export function GET(){
    return Response.json(
        {
            name : "Awadh",
            email : "awadh@gmail.com"
        },
    );
}

// To send send multiple deatils 
// export function GET(){
//     return Response.json([
//         {
//             username : "Awadh",
//             email : "awadh@gmail.com"
//         },
//         {
//             username : "Awadh",
//             email : "awadh@gmail.com"
//         }
//     ]);
// }

// or 
// export function GET(){
//     return Response.json({
//         user1 :{
//             username : "Awadh",
//             email : "awadh@gmail.com"
//         },
//         user2: {
//             username : "Awadh",
//             email : "awadh@gmail.com"
//         }
//     });
// }