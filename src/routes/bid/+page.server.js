import { supabase } from '$lib/supabase'

export async function load() {
    const { data } = await supabase
        .from('bids')
        .select('price, name')
        .order('price', { ascending: false })
        .limit(1)

    if (!data.length) {
        return { price: 0.00, name: 'none' }
    }
    else {
        return { price: data[0].price, name: data[0].name }
    }
}

export const actions = {
	default: async ({ request }) => {
        const formData = await request.formData()
        const price = formData.get('price')
        const name = formData.get('name')

        const { data } = await supabase
            .from('bids')
            .select('price')
            .order('price', { ascending: false })
            .limit(1)

        if (!price || !name) return { error: true }

        if (price < data[0].price) {
            return { success: false }
        }
        else {
            const { data, error } = await supabase
                .from('bids')
                .insert([{ price, name }])
            if (error) {
                return { error: true }
            }

            return { success: true, price: price, name: name }
        }
	}
}