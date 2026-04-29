// SelectTrigger (lines 43-46)
<SelectTrigger className="border rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-300 z-10 overflow-y-auto max-h-80">
  {props.trigger}
</SelectTrigger>

// SelectContent (lines 67-72)
<SelectContent className="bg-white border border-gray-300 rounded-md shadow-lg p-2 overflow-y-auto max-h-80 z-20">
  {props.children}
</SelectContent>

// SelectItem (lines 113-116)
<SelectItem className="hover:bg-blue-100 focus:bg-blue-200 p-2 rounded-md z-30">
  {props.item}
</SelectItem>