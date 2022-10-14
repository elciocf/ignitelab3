import { clsx } from 'clsx';
import { Check } from 'phosphor-react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'


export interface CheckboxProps {


}


export function Checkbox({ } : CheckboxProps){

    return (
        <CheckboxPrimitive.Root
          className={clsx(
            'w-6 h-6 p-[2px] bg-gray-800 rounded',
          )}
        >
            <CheckboxPrimitive.CheckboxIndicator asChild>
                <Check weight="bold" className="h-5 w-5 text-cyan-500" />
            </CheckboxPrimitive.CheckboxIndicator>
        </CheckboxPrimitive.Root>
    )
}