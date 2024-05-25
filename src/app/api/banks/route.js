const { NextResponse } = require("next/server");

export const GET = async () => {
    try {
        const response = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');

        if (!response.ok) {
            throw new Error('Error al hacer la petición');
        }
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Error al hacer la petición'}, { status: 500 });
    }

}