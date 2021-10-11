//1. Khai báo 5 tên biến đúng, 5 tên biến sai
console.log('câu1')
        // Khai báo 5 tên buến đúng
        
        var textVar ='lớp học frontend'
        console.log(textVar)

        let text='hello'
        console.log(text)

        const const_2='chào mừng bạn đến lớp học' // du lieu khong doi
      console.log(const_2)

      let h=1
      console.log(h)

      let $NumberVar =60
      console.log($NumberVar)

      // Khai báo 5 tên buến sai
      var TextVar ='lớp học frontend'
      console.log(TextVar)

      //let 2text='hello'
      //console.log(2text)

      const Const_2='chào mừng bạn đến lớp học' // du lieu khong doi
    console.log(Const_2)

    //let 2=1
    //console.log(2)

    let NumberVar =60
    console.log(NumberVar)
//2. Làm 5 bài toán sử dụng 5 toán tử: + - * / %
console.log('câu2')
      
    let a=10
    let b=30
    
    console.log(a+b)
    console.log(b-a)
    console.log(a*b)
    console.log(b/a)
    console.log(b%a)
//3. Tính kết quả các bài tập sau đây, in ra màn hình và giải thích tại sao lại ra được kết quả như vậy:
console.log('câu3')
    //3.1 x = 5. Tính: ++x + x++ - --x - x--
    let i=5
    //++x
   console.log(++i)
   let q=5
    console.log(q++)//x++
    let w=5
    console.log(--w)//--x
    let e=5
    console.log(e--)//x--


    console.log('Tính: ++x + x++ - --x - x--')
    console.log(++i + i++ - --i - i--)
    //giải thích --
    // i lúc đầu  có giá trị 5,
    // sau ghi gặp ++i thì giá trị + thêm 1 ptu lên 6,
    // rồi + i++( giá trị lúc này của i sẽ nhận là 6) sẽ thành 12,
    //sau khi cộng xong thì giá trị của i sẽ lên là 7, 
    //lúc này gặp - --i( do có --i
    // nên lúc này i sẽ giảm 1 phần tử trước khi thực hiện phep toán 
    //thì i lúc này giảm xuống là 6 ) sẽ là 12- 6 là bằng 6 và - i-- thì kết quả sẽ là 6-6 là  0

    
    //3.2 x = 6, y = 10. Tính: ++y - y++ + x++ + x-- - --x - --y
    console.log('3.2')
    let x = 6
    let y = 10
    console.log(x++)//x++(ptu không thay đổi)
    console.log(y++)//y++

    let x1 = 6
    let y1 = 10
    console.log(++x1)//++x(+ thêm 1 ptu)
    console.log(++y1)//++y

    let x2 = 6
    let y2 = 10
    console.log(x2--)//x-- (ptu không thay đổi )
    console.log(y2--)//y-- 

    let x3 = 6
    let y3 = 10
    console.log(--x3)//x++
    console.log(--y3)//y++


    console.log('Tính: ++y - y++ + x++ + x-- - --x - --y')
    console.log(++y - y++ + x++ + x-- - --x - --y)
    
    //giải thích --
    //giá trị ban đầu của x là 6 và y là 10,
    //trước khi thực hiện phép cộng thì giá trị của y tăng lên 1 ( vi ++y)
    // lúc này y sẽ là 11, 11 -11 sẽ là 0, sau khi thực hiện xong phép trừ thì y tăng lên 12( tại vì y++), 
    //giá trị lúc này của x là 6, khi thực hiện phép cộng thì giá trị của biến x-- sẽ là 7,0 +  6 + 7 sẽ là 13,
    // sau khi thực hiện phép công thì biến x trở về lại 6 tại vì (x-- nên giá trị biến x sẽ giảm 1 đơn vị),
    // tiếp theo - --x( giá trị X lúc này sẽ là 5): 0 + 6 + 7 - 5 là 8,
    // tiếp tục phép tính, do có --y nên giá trị y lúc này sẽ là 11- > 0 + 6 + 7 - 5 - 11 = -3

    
    //3.3 x = 10, y = 12, z = 16. 
    //Tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--
   //enter, tính lần 2 bài 3.3: ++x - x++ + z++ + ++y - y--
   console.log('Tính: x++ + z-- - --x + --y - y-- + ++y + ++z + --z + x--')

   let ax=10
   let ay=12
   let az=16
   console.log(ax++ + az-- - --ax + --ay - ay-- + ++ay + ++az + --az + ax--)
   console.log('3.3 lần 2')
   console.log(ax++ + az-- - --ax + --ay - ay-- + ++ay + ++az + --az + ax--)



// câu 4Khai báo 5 biến với 5 kiểu dữ liệu 
console.log('câu 4')

let name = 'Nguyễn Thị Diệu Ý' //kiểu dữ kiệu string
console.log(name)

let number1 =10 //kiểu dữ liệu number
let number2 = 10.05;
document.writeln(number1);
// Hiển thị number1 ra trình duyệt.
document.writeln(number1 + number2);
//Hiển thị tổng của hai số ra trình duyệt
console.log( number1)
console.log( number1+number2)

let n = true;//kiểu dữ liệu boolean
let m = false;
let g = 10 > 11;
let k = 10 < 15;
console.log( n)
console.log( m)
console.log( g)
console.log( k)

// Biến này chưa đượcgán giá trị
// Do đó nó chứa giá trị mặc định là undefined
let undef; //// Kiểu dữ liệu  undefined
console.log(typeof undef)

let bienNull = null;//kiểu dữ liệu null
console.log(bienNull)// kq null
console.log(typeof bienNull)//kq object

//câu 5 Khai báo biến với kiểu dữ liệu Array như sau: [1,2,3,4,5,6,7,8,9,10]
console.log('câu 5')
let array =[1,2,3,4,5,6,7,8,9,10]
console.log(array,typeof array)
console.log(array[0]+array[1])//Tính tổng (+) phần tử đầu tiên (0) và phần từ thứ 2 (1)
console.log(array[0]+array[9])//5.2 Tính tích (*) phần tử đầu tiên (0) và phần từ cuối cùng (9)


//6. Khai báo 1 biến với kiểu dữ liệu Object, bào gồm firstName, lastName, age, favorite
console.log('câu 6')

    let object = { firstName: 'Diệu Ý', lastName: 'Nguyễn Thị', age: '21', favourite: 'eat and sleep' }
    let txt = 'Na'
    object.firstName = txt
    let txt1 = 'Ý'
    object .lastName = txt

// 6.2
        console.log('Bai 6.2')
        object = object.firstName +' '+ object.lastName
        console.log(object)




















