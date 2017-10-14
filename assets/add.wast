(module
 (type $iii (func (param i32 i32) (result i32)))
 (memory $0 1)
 (export "fib" (func $fib))
 (export "memory" (memory $0))
 (func $fib (type $iii) (param $0 i32) (param $1 i32) (result i32)
  (i32.add
   (get_local $0)
   (get_local $1)
  )
 )
)
