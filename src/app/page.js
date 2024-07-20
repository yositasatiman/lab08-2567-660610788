import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import Footer from "./components/Footer";

export default function Home() {
  const tasks = [
    { id: 1, titel: "Read a book", isDone: true },
    { id: 2, titel: "Take a shower", isDone: false },
    { id: 3, titel: "Sleep", isDone: false },
  ]

  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header/>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        {/* task */}
        <Task {...tasks[0]}/>
        {/* task */}
        <Task {...tasks[1]}/>
        {/* task */}
        <Task {...tasks[2]}/>
        </div>

      {/* //footer section */}
      <Footer yesr= "2024" fullName = "Yosita Satiman" studentID = "660610788"/>
    </div>
  );
}
