function content(){
    ` <!-- Dont make any changes here -->
    <h1>TODO App</h1>

    <div>
      <!-- ***** We are using form here  ****  -->
      <form>
        <label for="">Task Name</label><br />
        <input id="task" type="text" placeholder="Enter Task Name" /><br />
        <label for="">Priority </label><br />
        <select id="priority">
          <option value="">Select Priority</option>
          <option value="High">High</option>
          <option value="Low">Low</option>
        ><br />
        <input type="submit" value="Add task" />
      </form>
      <table>
        <!-- Dont change order of columns -->
        <thead>
          <tr>
            <th>Task</th>
            <th>Priority</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        <!-- Append your output to tbody -->
        </tbody>
      </table>
    </div>
    `
}
export {content};