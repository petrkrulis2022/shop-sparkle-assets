import { formatCurrency } from '@/utils/currency';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  showCheckout?: boolean;
  onCheckout?: () => void;
  checkoutLabel?: string;
}

export const OrderSummary = ({
  subtotal,
  shipping,
  tax,
  total,
  showCheckout = true,
  onCheckout,
  checkoutLabel = 'Proceed to Checkout',
}: OrderSummaryProps) => {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4 sticky top-20">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">
            {shipping === 0 ? 'FREE' : formatCurrency(shipping)}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax (8%)</span>
          <span className="font-medium">{formatCurrency(tax)}</span>
        </div>
        
        {shipping === 0 && subtotal > 0 && (
          <p className="text-xs text-success">
            🎉 You qualify for free shipping!
          </p>
        )}
      </div>

      <Separator />

      <div className="flex justify-between text-lg font-bold">
        <span>Total</span>
        <span className="text-primary">{formatCurrency(total)}</span>
      </div>

      {showCheckout && (
        <>
          <Button size="lg" className="w-full" onClick={onCheckout}>
            {checkoutLabel}
          </Button>
          
          <Button variant="outline" size="sm" className="w-full">
            Continue Shopping
          </Button>
        </>
      )}
    </div>
  );
};
