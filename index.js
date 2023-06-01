function telefono(valor) {
    if (typeof valor === "number") {
        return "Gracias por ingresar su numero"
    }
    throw new Error("Debe ingresar solo numeros")
}
try {
    console.log(telefono("string"))
    console.log("Salio bien")
} catch (error) {
    console.error(error)
    console.error("Mensaje de error de catch")
} finally {
    console.log("Mensaje de finally")
}

