const scanf = require('scanf');
// console.log('请输入两个数，计算两个数的和：请按回车继续');
// scanf('%d');
// console.log('输入a:');
// let a=scanf('%d');
// console.log('输入b:');
// let b=scanf('%d');
// let c=a+b;
// console.log('拼接a+b='+a+b);
// console.log('a+b=c='+c);
// console.log('a+b='+(a+b));


// if
// if(a>b){
//     console.log('最大值是a：'+a);
// }else if(b>a) {
//     console.log('最大值是b：'+b);
// }else {
//     console.log('a=b='+a);
// }


//for循环
// let arr=[1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     let xinlong = arr[i];
//     console.log(xinlong);
// }


//while循环
// console.log('欢迎进入***系统');
// while(1){
//     console.log('1---添加一个幸运数字');
//     console.log('2---显示全部幸运数字');
//     console.log('3---删除最后一个数字');
//     console.log('4---退出');
//     let con=scanf('%d');
//     if (con===1){
//         console.log('1---添加一个幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if (con===2){
//         console.log('2---显示全部幸运数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if (con===3){
//         console.log('3---删除最后一个数字');
//         console.log('点击回车继续');
//         scanf('%d');
//     }
//     if (con===4){
//         console.log('4---退出');
//         break;
//     }
// }


//幸运数字
// let arr=[];
// while(1){
//         console.log('1---添加一个幸运数字');
//         console.log('2---显示全部幸运数字');
//         console.log('3---删除最后一个数字');
//         console.log('4---退出');
//         let con=scanf('%d');
//         if (con===1){
//             console.log('1---添加一个幸运数字');
//             let x=scanf('%d')
//             arr.push(x);
//             console.log('添加成功'+arr);
//             scanf('%d');
//         }
//         if (con===2){
//             console.log('2---显示全部幸运数字');
//             for(let i=0;i<arr.length;i++){
//                 let xinlong = arr[i];
//                 console.log(xinlong);
//             }
//             console.log('点击回车继续');
//             scanf('%d');
//         }
//         if (con===3){
//             console.log('3---删除最后一个数字');
//             arr.pop();
//             console.log('删除成功');
//             scanf('%d');
//         }
//         if (con===4){
//             console.log('4---退出');
//             break;
//         }
//     }


//坐标系统
// let arr=[];
// while(1){
//         console.log('1---添加一个坐标');
//         console.log('2---显示全部坐标');
//         console.log('3---删除最后一个坐标');
//         console.log('4---退出');
//         let con=scanf('%d');
//         if (con===1){
//             console.log('1---添加一个坐标');
//             console.log('请输入横坐标');
//             let x=scanf('%d');
//             console.log('请输入纵坐标');
//             let y=scanf('%d');
//             let zuobiao={
//                 'x':x,
//                 'y':y,
//             }
//             arr.push(zuobiao);
//             console.log('添加成功');
//             scanf('%d');
//         }
//         if (con===2){
//             console.log('2---显示全部坐标');
//             for(let i=0;i<arr.length;i++){
//                 let xinlong = arr[i];
//                 console.log(`第${i+1}坐标为(${xinlong.x},${xinlong.y})`);
//             }
//             console.log('点击回车继续');
//             scanf('%d');
//         }
//         if (con===3){
//             console.log('3---删除最后一个坐标');
//             arr.pop();
//             console.log('删除成功');
//             scanf('%d');
//         }
//         if (con===4){
//             console.log('退出');
//             break;
//         }
//     }


// let xinlong={
//     a:1,
//     b:2,
// }
// console.log(xinlong);


//学生管理系统
let arr = [];
while (1) {
    console.log('1---添加一个学生学科成绩');
    console.log('2---显示全部学生学科成绩');
    console.log('3---删除最后一个人学生学科成绩');
    console.log('4---退出');
    let con = scanf('%d');
    if (con === 1) {
        if (con === 1) {
            console.log('1---添加学生姓名');
            console.log('请输入学生姓名');
            let xingming = scanf('%s');
            console.log('请输入语文成绩');
            let yuwen = scanf('%d');
            console.log('请输入数学成绩');
            let shuxue = scanf('%d');
            let chengji = {
                'xingming': xingming,
                'yuwen': yuwen,
                'shuxue': shuxue,
            }
            arr.push(chengji);
            console.log('添加成功');
            scanf('%d');
        }
    }
    if (con === 2) {
        console.log('2---显示全部学生学科成绩');
        for (let i = 0; i < arr.length; i++) {
            let chengji = arr[i];
            console.log(`学生：${chengji.xingming}\n语文：${chengji.yuwen}\n数学：${chengji.shuxue}`);
        }
        console.log('点击回车继续');
        scanf('%d');
    }
    if (con === 3) {
        console.log('3---删除最后一个人学生学科成绩');
        arr.pop();
        console.log('删除成功');
        scanf('%d');
    }
    if (con === 4) {
        console.log('4---退出');
        break;
    }
}


