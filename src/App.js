import React, { useEffect, useState } from "react";

function App() {
  const [array, setArray] = useState([]);
  const [search, setSearch] = useState();
  const [psh, setpsh] = useState("");

  function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1);
    var R = new Array(n2);
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  function mergeSort(arr, l, r) {
    if (l >= r) {
      return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }

  let recursiveFunction = function (arr, x, start, end) {
    if (start > end) return false;
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
    else return recursiveFunction(arr, x, mid + 1, end);
  };
  function swap(arr, x, y) {
    var temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
  }

  function bubbleSort(arr, n) {
    var i, j;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
  }
  const [msg, setmsg] = useState("Messege Will appear here...");
  const fn = () => {
    if (array.length <= 14) {
      if (psh == "") {
        array.push(Math.floor(Math.random() * 43));
      } else {
        array.push(psh);
        setpsh("");
      }
      setmsg("Try Out Popping some values from me");
      setArray([...array]);
    } else {
      setmsg("stack OverFlow");
    }
  };
  const fn2 = () => {
    if (array.length == 0) {
      setmsg("Cant pop, Stack UnderFlow");
    } else {
      array.pop();
      setmsg("Y Dont u PUSH some values in me");
      setArray([...array]);
    }
  };
  const fn3 = () => {
    if (array.length == 0) {
      setmsg("true");
    } else {
      setmsg("false");
    }
  };
  const fn31 = () => {
    if (array.length == 15) {
      setmsg("true");
    } else {
      setmsg("false");
    }
  };
  const fn4 = () => {
    let size = array.length;
    if (size >= 1) {
      setmsg(array[size - 1]);
    } else {
      setmsg("You need to Push some Values to Peek in");
    }
  };
  const fn5 = () => {
    let size = array.length;
    if (size == 0) {
      setmsg("Already Empty");
    } else {
      setArray([]);
      setmsg("Your Messege Will appear here...");
    }
  };
  const fn6 = () => {
    bubbleSort(array, 15);
    let bag = "Sorted array - [";
    for (let i = 0; i < array.length; i++) {
      bag += array[i] + ",";
    }
    setmsg(bag + "]");
  };
  // const fn7 = () => {
  //   bubbleSort(array, 15);
  //   let res = recursiveFunction(array,26, 0, 15);
  //   // console.log([search][0],res)
  //   if(!res){
  //     setmsg("Not Found")
  //   }else{
  //     setmsg(res)
  //   }
  // };

  const fn7 = () => {
    bubbleSort(array, 15);
    let res = recursiveFunction(array, +search, 0, 15);
    setSearch();
    console.log(res, +search);
    if (!res) {
      setmsg("Not Found");
    } else {
      setmsg(res);
    }
    setSearch();
  };

  const fill = () => {
    let lmt = array.length;

    for (let i = 0; i < 15 - lmt; i++) {
      array.push(Math.floor(Math.random() * 43));
      setArray([...array]);
    }
    setmsg("Yupp , Filled !");
  };

  return (
    <div className="flex justify-center items-end  gap-20 h-screen py-4">
      <div className="App flex flex-col-reverse justify-start gap-2 bg-green-100 h-full w-32 stack">
        {array.map((e, key) => {
          return (
            <div
              key={key}
              className={`bg-green-400 flex justify-center font-bold   w-28 px-5 py-2 rounded mx-2`}
            >
              {e}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 w-[555px]">
        {/* <p className=" px-3 py-4 text-black bg-yellow-100">{array}</p> */}
        <p className=" px-3 py-4 text-black bg-yellow-100">{msg}</p>

        <div className="flex gap-3">
          <div className="flex flex-col gap-2 w-[50%]">
            <div className="flex gap-2">
              <button
                className="bg-red-400 px-4 py-1 text-bold rounded"
                onClick={fn}
              >
                PUSH
              </button>
              <input
                className="bg-red-400 rounded px-2"
                type="number"
                onChange={(e) => setpsh(e.target.value)}
              />
            </div>
            <button
              className="bg-red-400 px-4 py-1 text-bold rounded"
              onClick={fn2}
            >
              POP
            </button>
            <button
              className="bg-red-400 px-4 py-1 text-bold rounded"
              onClick={fn3}
            >
              IsEmpty
            </button>
            <button
              className="bg-red-400 px-4 py-1 text-bold rounded"
              onClick={fn31}
            >
              IsFull
            </button>
          </div>

          <div className="flex flex-col gap-2 w-[50%]">
            <button
              className="bg-red-400 px-4 py-1 text-bold rounded"
              onClick={fn4}
            >
              Peek
            </button>
            <div className="flex gap-2">
              <button
                className="bg-red-400 px-4 py-1 text-bold rounded flex-1"
                onClick={fn5}
              >
                Reset
              </button>
              <button
                className="bg-red-400 px-4 py-1 text-bold rounded flex-1"
                onClick={fill}
              >
                fill
              </button>
            </div>
            <button
              className="bg-red-400 px-4 py-1 text-bold rounded"
              onClick={fn6}
            >
              Sort
            </button>
            <div className="flex gap-2">
              <button
                className="bg-red-400 px-2 py-1 text-bold rounded"
                onClick={fn7}
              >
                Search
              </button>
              <input
                className="bg-red-400 rounded px-2"
                type="number"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;

// h-[${e*13}px]
